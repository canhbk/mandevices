import {EventEmitter, Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import gql from 'graphql-tag';
import {FetchPolicy} from 'apollo-client';

const currentUserQuery = gql`
                    query CurrentUser{
                          currentUser{
                             token
                                user{
                                 id
                                 fullName
                                 firstName
                                 role
                                }
                                  
                              }
                            }`;

export enum Roles {
    GUEST = 'GUEST',
    MANAGER = 'MANAGER'
}

export interface User {
    id: string
    firstName: string
    fullName: string;
    email: string;
    role: Roles;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    currentUser = new EventEmitter<User>();
    currentUserValue: User;

    constructor(private apollo: Apollo) {
    }

    login = (email: string, password: string) => {
        return new Observable(observer => {
            this.apollo.mutate({
                mutation: gql`
                    mutation Login($email: String!, $password: String!){
                      login(email:$email,password:$password){
                        token
                        user{
                          firstName
                        }
                      }
                    }
          `, variables: {email, password}, refetchQueries: [{query: currentUserQuery},]
            }).subscribe(({data}) => {
                const loginData = (data as any).login;
                localStorage.setItem('token', loginData.token);
                this.currentUser.emit(loginData.user);
                observer.next(loginData.user);
            }, error => observer.next(error));
        });
    };

    getCurrentUser = (fetchPolicy?: FetchPolicy) => {
        return new Observable<User>(observer => {
            this.apollo.query({
                query: currentUserQuery,
                fetchPolicy
            }).subscribe(({data}) => {
                    const currentUserData = (data as any).currentUser;
                    if (currentUserData) {
                        this.currentUser.emit(currentUserData.user);
                        this.currentUserValue = currentUserData.user;
                        observer.next(currentUserData.user);
                    } else {
                        this.currentUser.emit(null);
                        observer.next(null);
                    }
                }
                ,
                error => observer.error(error)
            );
        });
    };


    logout = () => {
        return new Observable((observer) => {
            localStorage.removeItem('token');
            this.apollo.getClient().resetStore().then(() => {
                this.currentUser.emit(null);
                observer.next();
            }).catch(error => observer.error(error));
        });
    };
};

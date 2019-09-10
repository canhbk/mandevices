import React from 'react';
import ux from '../asset/ux.png';
import skill from '../asset/skill.png';
import tech from '../asset/technology.png';
import speed from '../asset/speed.png';
import { Services, InServices } from './ui';
const ServicesPresentations = () => {
	return (
		<Services>
			<InServices>
				<h2>Services</h2>
				<span>
					Liên Minh Huyền
					Thoại mang lại vô
					vàn trải nghiệm mới
					lạ!
				</span>
				<ul>
					<li>
						<img
							src={
								ux
							}
							alt=""
						/>
						<div>
							<h3>
								Graphics
							</h3>
							<h4>
								Lorem
								ipsum
								dolor
								sit
								amet
								consectetur
								adipisicing
								elit.
								Aliquid
								voluptas
								aperiam
								sit
								ab
								hic
								repudiandae
								blanditiis
								unde
								aspernatur
								corrupti
								quae
								nisi,
								dolorem,
								et
								nam
								impedit
								quisquam
								in!
								Veritatis,
								laborum
								iste.
							</h4>
							<h5>
								Xem
								thêm...
							</h5>
						</div>
					</li>
					<li>
						<img
							src={
								tech
							}
							alt=""
						/>
						<div>
							<h3>
								Technology
							</h3>
							<h4>
								Lorem
								ipsum
								dolor
								sit
								amet
								consectetur
								adipisicing
								elit.
								Aliquid
								voluptas
								aperiam
								sit
								ab
								hic
								repudiandae
								blanditiis
								unde
								aspernatur
								corrupti
								quae
								nisi,
								dolorem,
								et
								nam
								impedit
								quisquam
								in!
								Veritatis,
								laborum
								iste.
							</h4>
							<h5>
								Xem
								thêm...
							</h5>
						</div>
					</li>
					<li>
						<img
							src={
								speed
							}
							alt=""
						/>
						<div>
							<h3>
								Speed
							</h3>
							<h4>
								Lorem
								ipsum
								dolor
								sit
								amet
								consectetur
								adipisicing
								elit.
								Aliquid
								voluptas
								aperiam
								sit
								ab
								hic
								repudiandae
								blanditiis
								unde
								aspernatur
								corrupti
								quae
								nisi,
								dolorem,
								et
								nam
								impedit
								quisquam
								in!
								Veritatis,
								laborum
								iste.
							</h4>
							<h5>
								Xem
								thêm...
							</h5>
						</div>
					</li>
					<li>
						<img
							src={
								skill
							}
							alt=""
						/>
						<div>
							<h3>
								Skills
							</h3>
							<h4>
								Lorem
								ipsum
								dolor
								sit
								amet
								consectetur
								adipisicing
								elit.
								Aliquid
								voluptas
								aperiam
								sit
								ab
								hic
								repudiandae
								blanditiis
								unde
								aspernatur
								corrupti
								quae
								nisi,
								dolorem,
								et
								nam
								impedit
								quisquam
								in!
								Veritatis,
								laborum
								iste.
							</h4>
							<h5>
								Xem
								thêm...
							</h5>
						</div>
					</li>
				</ul>
			</InServices>
		</Services>
	);
};
export default ServicesPresentations;
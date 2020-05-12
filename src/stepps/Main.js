import React from 'react';

import { Container, List, Info } from './styled';
import { MdPolymer } from 'react-icons/md';

export default function main() {
  return (
    <Container>
      <List>
        <label htmlFor="">
          <MdPolymer /> Help Desk
        </label>
        <ul>
          <li>primeira</li>
          <li>segunda</li>
          <li>teceira</li>
        </ul>
      </List>
      <Info>
        <label htmlFor="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque
          rerum reprehenderit in id quia, unde ad laborum est possimus
          reiciendis distinctio? Voluptates quae maiores iste quas? Quos, illum
          quasi.
        </label>
        <div>
          <p>Name</p>
          <input type="text" />

          <div>
            <div>
              <p>Depatarment</p>
              <input type="text" />
            </div>

            <div>
              <p>Branch</p>
              <input type="text" />
            </div>
          </div>

          <div>
            <div>
              <p>Depatarment</p>
              <input type="text" />
            </div>

            <div>
              <p>Branch</p>
              <input type="text" />
            </div>
          </div>

          <div>
            <div>
              <p>Depatarment</p>
              <select name="" id=""></select>
            </div>
          </div>

          <div>
            <div>
              <p>Depatarment</p>
              <button>Not urgent</button>
              <button>Urgent</button>
            </div>
          </div>
        </div>
      </Info>
    </Container>
  );
}

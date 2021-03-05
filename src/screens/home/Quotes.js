import React from 'react'

import * as Reveal from 'react-reveal/Zoom';

export default function Quotes() {
    return (
        <div className="home-quotes-main-wrapper">
            <div className="home-quotes-wrapper">
                <Reveal>
                    <div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius, turpis vitae molestie sodales, ligula sapien scelerisque nunc, in fermentum risus velit quis est. Donec gravida lorem felis, ut pellentesque leo luctus eu. Praesent sit amet ultricies sem. Praesent sit amet viverra nunc."</p>
                        <p>- Eve Salinas</p>
                    </div>
                </Reveal>
                <Reveal delay={400}>
                    <div>
                        <p>"Etiam lacinia in massa id malesuada. Fusce vitae ipsum egestas, pellentesque leo ac, malesuada augue. Sed id dictum est. Curabitur vitae magna congue, porttitor tellus quis, ullamcorper arcu. Curabitur ornare euismod vulputate. Praesent auctor ullamcorper dolor, vel malesuada nunc sollicitudin at."</p>
                        <p>- Daria Farrington</p>
                    </div>
                </Reveal>
                <Reveal delay={800}>
                    <div>
                        <p>Aenean volutpat malesuada nunc, nec ullamcorper massa scelerisque vulputate. Integer sit amet orci vulputate, imperdiet libero at, efficitur lacus. Maecenas tristique leo in massa faucibus, vitae molestie augue auctor.</p>
                        <p>- Zion Ryder</p>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

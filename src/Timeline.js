import React from 'react';

const Timeline = () => {
  return (
    <div className='pt-3 d-flex flex-column justify-content-center align-items-center'>
      <h3 className="my-5">Timeline challenga</h3>
      <div className='timeline my-1 py-2'>
        <ul>
          <li>
            <div className='content'>
              <h6>Uvodni videi</h6>
              <p>Upoznali smo ekipu i vidjeli kako su timovi podijeljeni! #rozi i #plavi</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>11.5.2020. dan #0</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>Prva žetva!</h6>
              <p>Valentino je sakupio većinu i osigurao svoje mjesto u rozom timu, dok je Morana ispala :(</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>14.5.2020.  dan #3</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>RIP Ezekijel</h6>
              <p>Čovjek popio previše. <span className='font-italic'>(znam da zvuči kao da je umro, samo je ispao iz natjecanja, dw)</span></p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>17.5.2020. dan #6</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>Druga žetva :o</h6>
              <p>Petra razbija Valentina te ga izbacuje iz rozog tima!</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>17.5.2020. dan #6</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>Dora no more</h6>
              <p>Dora je kickana, nije snimila video. F in the chat</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>18.5.2020. dan #7</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>File se predaje</h6>
              <p>Big respect kmici.</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>20.5.2020. dan #9</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>Treća žetva :D</h6>
              <p>Ivan je slam dunkao na Lovru, te ga izbacio iz plavog tima.</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>21.5.2020. dan #10</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>Četvrta žetva woah</h6>
              <p>Lorena VS Ivona. Bilo je vrlo blizu no na kraju dana Ivona je ipak pobijedila.</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <p className='text-small'>22.5.2020. dan #11</p>
            </div>
          </li>
          <li>
            <div className='content'>
              <h6>To be continued...</h6>
              <p>još traje haha</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              {/* <p className='text-small'>22.5.2020.</p> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
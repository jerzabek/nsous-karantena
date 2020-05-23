import React from 'react';

const Timeline = () => {
  return (
    <div className='pt-3 d-flex flex-column justify-content-center align-items-center'>
      <h1 className="my-5">Timeline challenga</h1>
      <div className='timeline my-1 py-2'>
        <ul>
          <li>
            <div className='content'>
              <h3>Uvodni videi</h3>
              <p>Upoznali smo ekipu i vidjeli kako su timovi podijeljeni! #rozi i #plavi</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>11.5.2020. dan #0</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Prva žetva!</h3>
              <p>Valentino je sakupio većinu i osigurao svoje mjesto u rozom timu, dok je Morana ispala :(</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>14.5.2020.  dan #3</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>RIP Ezekijel</h3>
              <p>Čovjek popio previše. <span className='font-italic'>(znam da zvuči kao da je umro, samo je ispao iz natjecanja, dw)</span></p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>17.5.2020. dan #6</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Druga žetva :o</h3>
              <p>Petra razbija Valentina te ga izbacuje iz rozog tima!</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>17.5.2020. dan #6</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Dora no more</h3>
              <p>Dora je kickana, nije snimila video. F in the chat</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>18.5.2020. dan #7</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>File se predaje</h3>
              <p>Big respect kmici.</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>20.5.2020. dan #9</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Treća žetva :D</h3>
              <p>Ivan je slam dunkao na Lovru, te ga izbacio iz plavog tima.</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>21.5.2020. dan #10</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>Četvrta žetva woah</h3>
              <p>Lorena VS Ivona. Bilo je vrlo blizu no na kraju dana Ivona je ipak pobijedila.</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              <h4 className='text-small'>22.5.2020. dan #11</h4>
            </div>
          </li>
          <li>
            <div className='content'>
              <h3>To be continued...</h3>
              <p>još traje haha</p>
            </div>
            <div className='point'></div>
            <div className='date'>
              {/* <h4 className='text-small'>22.5.2020.</h4> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
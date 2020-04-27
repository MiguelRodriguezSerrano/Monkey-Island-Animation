//Music Section

import BandaSonoraSprite from '../../assets/BandaSonoraSprite.mp3'
const bso =  new Audio(BandaSonoraSprite);

const playBtn = document.querySelector('#playBtn');
const pauseBtn = document.querySelector('#pauseBtn');
playBtn.addEventListener('click', () => {
    bso.volume = 0.2;
    bso.loop = true;
    bso.play();
})
pauseBtn.addEventListener('click', () => {
    bso.pause();
})

//Talk Section

/* const speak = document.querySelector('.question');

speak.addEventListener('click', () => {
    const msg = new SpeechSynthesisUtterance();

    msg.lang = 'es';
    msg.pitch = 1.3;
    msg.volume = 1;
    msg.text = 'Hace muchos años surcaba los mares un temible navío pirata al mando del cual se encontraba el fiero pirata Patapocha. El pirata Patapocha tenía una pata de palo. La suya la había perdido en una legendaria batalla en los mares del norte contra corsarios ingleses, cuando todavía era un grumete y todo el mundo le llamaba Bern.';

    speechSynthesis.speak(msg);
 
    const msg2 = new SpeechSynthesisUtterance();
    msg2.lang = 'es';
    msg2.pitch = 2;
    msg2.volume = 1;
    msg2.text = 'Aquel día, cuando parecía que todo estaba perdido, el grumete Bern salió en auxilio de su capitán y logró salvarlo a él y al barco entero. Pero en su hazaña fue herido gravemente en una pierna.';
    speechSynthesis.speak(msg2); 
    
    const msg3 = new SpeechSynthesisUtterance();
    msg3.lang = 'es';
    msg3.pitch = 1.3;
    msg3.volume = 1;
    msg3.text = 'Como la pierna de Bern no sanaba se se la tuvieron que sustituir por una pata de palo. Bern, es decir, Patapocha, juró vengarse del que le había hecho perder la pierna. Desde ese día Bern, camina sin parar hasta encontrar a esos piratas.';
    speechSynthesis.speak(msg3); 
}); */


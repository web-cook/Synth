import {keyboardKeys} from "./src/keyboardKeys.js";
import {pianoKeys} from "./src/pianoKeys.js";
import Organ from "./src/organ.js";
import Sound from "./src/sound.js";

document.addEventListener('DOMContentLoaded', () => {
    const audioCtx = new window.AudioContext();
    //organ sound
    let organ = new Organ();

    let hornTable = audioCtx.createPeriodicWave(organ.tables.real, organ.tables.imag);

    const arrayOfKeyboardKeys = Object.keys(keyboardKeys);

    let playingNotes = [];

    function setPlayingNotes(waveform) {
        for(let i = 0; i < arrayOfKeyboardKeys.length; i++) {
            playingNotes[i] = new Sound(audioCtx, waveform);
        }
    }

    setPlayingNotes(hornTable);

    const gain = document.querySelector('.gain input');

    function defaultGain(defaultValue) {
        for(let i = 0; i < arrayOfKeyboardKeys.length; i++) {
            playingNotes[i].changeGain(defaultValue);
        }
    }

    defaultGain(0.2);

    gain.addEventListener('input', (e) => {
        for(let i = 0; i < arrayOfKeyboardKeys.length; i++) {
            playingNotes[i].changeGain(e.target.value);
        }
    })

    document.addEventListener('keydown', (e) => {
        switch (e.code) {
            case arrayOfKeyboardKeys[0]: 
                if(keyboardKeys.KeyQ.pressed === true) return;
                playingNotes[0].play(keyboardKeys.KeyQ.note);
                keyboardKeys.KeyQ.pressed = true;
                pianoKeys.e_2.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[1]: 
                if(keyboardKeys.KeyW.pressed === true) return;
                playingNotes[1].play(keyboardKeys.KeyW.note);
                keyboardKeys.KeyW.pressed = true;
                pianoKeys.f_2.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[2]:
                if(keyboardKeys.KeyE.pressed === true) return;
                playingNotes[2].play(keyboardKeys.KeyE.note);
                keyboardKeys.KeyE.pressed = true;
                pianoKeys.f_sharp_2.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[3]: 
                if(keyboardKeys.KeyR.pressed === true) return;
                playingNotes[3].play(keyboardKeys.KeyR.note);
                keyboardKeys.KeyR.pressed = true;
                pianoKeys.g_2.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[4]:               
                if(keyboardKeys.KeyT.pressed === true) return;
                playingNotes[4].play(keyboardKeys.KeyT.note);
                keyboardKeys.KeyT.pressed = true;
                pianoKeys.g_sharp_2.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[5]:
                if(keyboardKeys.KeyA.pressed === true) return;
                playingNotes[5].play(keyboardKeys.KeyA.note);
                keyboardKeys.KeyA.pressed = true;
                pianoKeys.a_2.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[6]:
                if(keyboardKeys.KeyS.pressed === true) return;
                playingNotes[6].play(keyboardKeys.KeyS.note);
                keyboardKeys.KeyS.pressed = true;
                pianoKeys.a_sharp_2.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[7]:
                if(keyboardKeys.KeyD.pressed === true) return;
                playingNotes[7].play(keyboardKeys.KeyD.note);
                keyboardKeys.KeyD.pressed = true;
                pianoKeys.b_2.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[8]: 
                if(keyboardKeys.KeyF.pressed === true) return;
                playingNotes[8].play(keyboardKeys.KeyF.note);
                keyboardKeys.KeyF.pressed = true;
                pianoKeys.c_3.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[9]: 
                if(keyboardKeys.KeyG.pressed === true) return;
                playingNotes[9].play(keyboardKeys.KeyG.note);
                keyboardKeys.KeyG.pressed = true;
                pianoKeys.c_sharp_3.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[10]:
                if(keyboardKeys.KeyZ.pressed === true) return;
                playingNotes[10].play(keyboardKeys.KeyZ.note);
                keyboardKeys.KeyZ.pressed = true;
                pianoKeys.d_3.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[11]: 
                if(keyboardKeys.KeyX.pressed === true) return;
                playingNotes[11].play(keyboardKeys.KeyX.note);
                keyboardKeys.KeyX.pressed = true;
                pianoKeys.d_sharp_3.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[12]:               
                if(keyboardKeys.KeyC.pressed === true) return;
                playingNotes[12].play(keyboardKeys.KeyC.note);
                keyboardKeys.KeyC.pressed = true;
                pianoKeys.e_3.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[13]:
                if(keyboardKeys.KeyV.pressed === true) return;
                playingNotes[13].play(keyboardKeys.KeyV.note);
                keyboardKeys.KeyV.pressed = true;
                pianoKeys.f_3.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[14]:
                if(keyboardKeys.KeyB.pressed === true) return;
                playingNotes[14].play(keyboardKeys.KeyB.note);
                keyboardKeys.KeyB.pressed = true;
                pianoKeys.f_sharp_3.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[15]:
                if(keyboardKeys.KeyN.pressed === true) return;
                playingNotes[15].play(keyboardKeys.KeyN.note);
                keyboardKeys.KeyN.pressed = true;
                pianoKeys.g_3.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[16]:
                if(keyboardKeys.KeyM.pressed === true) return;
                playingNotes[16].play(keyboardKeys.KeyM.note);
                keyboardKeys.KeyM.pressed = true;
                pianoKeys.g_sharp_3.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[17]:
                if(keyboardKeys.Comma.pressed === true) return;
                playingNotes[17].play(keyboardKeys.Comma.note);
                keyboardKeys.Comma.pressed = true;
                pianoKeys.a_3.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[18]:
                if(keyboardKeys.Period.pressed === true) return;
                playingNotes[18].play(keyboardKeys.Period.note);
                keyboardKeys.Period.pressed = true;
                pianoKeys.a_sharp_3.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[19]:
                if(keyboardKeys.KeyH.pressed === true) return;
                playingNotes[19].play(keyboardKeys.KeyH.note);
                keyboardKeys.KeyH.pressed = true;
                pianoKeys.b_3.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[20]: 
                if(keyboardKeys.KeyJ.pressed === true) return;
                playingNotes[20].play(keyboardKeys.KeyJ.note);
                keyboardKeys.KeyJ.pressed = true;
                pianoKeys.c_4.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[21]: 
                if(keyboardKeys.KeyK.pressed === true) return;
                playingNotes[21].play(keyboardKeys.KeyK.note);
                keyboardKeys.KeyK.pressed = true;
                pianoKeys.c_sharp_4.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[22]:
                if(keyboardKeys.KeyL.pressed === true) return;
                playingNotes[22].play(keyboardKeys.KeyL.note);
                keyboardKeys.KeyL.pressed = true;
                pianoKeys.d_4.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[23]: 
                if(keyboardKeys.Semicolon.pressed === true) return;
                playingNotes[23].play(keyboardKeys.Semicolon.note);
                keyboardKeys.Semicolon.pressed = true;
                pianoKeys.d_sharp_4.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[24]:               
                if(keyboardKeys.KeyY.pressed === true) return;
                playingNotes[24].play(keyboardKeys.KeyY.note);
                keyboardKeys.KeyY.pressed = true;
                pianoKeys.e_4.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[25]:
                if(keyboardKeys.KeyU.pressed === true) return;
                playingNotes[25].play(keyboardKeys.KeyU.note);
                keyboardKeys.KeyU.pressed = true;
                pianoKeys.f_4.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[26]:
                if(keyboardKeys.KeyI.pressed === true) return;
                playingNotes[26].play(keyboardKeys.KeyI.note);
                keyboardKeys.KeyI.pressed = true;
                pianoKeys.f_sharp_4.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[27]:
                if(keyboardKeys.KeyO.pressed === true) return;
                playingNotes[27].play(keyboardKeys.KeyO.note);
                keyboardKeys.KeyO.pressed = true;
                pianoKeys.g_4.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[28]:
                if(keyboardKeys.KeyP.pressed === true) return;
                playingNotes[28].play(keyboardKeys.KeyP.note);
                keyboardKeys.KeyP.pressed = true;
                pianoKeys.g_sharp_4.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[29]:
                if(keyboardKeys.Digit8.pressed === true) return;
                playingNotes[29].play(keyboardKeys.Digit8.note);
                keyboardKeys.Digit8.pressed = true;
                pianoKeys.a_4.classList.add('pressed_white');
                break;

            case arrayOfKeyboardKeys[30]:
                if(keyboardKeys.Digit9.pressed === true) return;
                playingNotes[30].play(keyboardKeys.Digit9.note);
                keyboardKeys.Digit9.pressed = true;
                pianoKeys.a_sharp_4.classList.add('pressed_black');
                break;

            case arrayOfKeyboardKeys[31]:
                if(keyboardKeys.Digit0.pressed === true) return;
                playingNotes[31].play(keyboardKeys.Digit0.note);
                keyboardKeys.Digit0.pressed = true;
                pianoKeys.b_4.classList.add('pressed_white');
                break;
        }
    })

    document.addEventListener('keyup', (e) => {
        switch (e.code) {
            case arrayOfKeyboardKeys[0]:
                playingNotes[0].stop(); 
                keyboardKeys.KeyQ.pressed = false;
                pianoKeys.e_2.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[1]:
                playingNotes[1].stop(); 
                keyboardKeys.KeyW.pressed = false;
                pianoKeys.f_2.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[2]:
                playingNotes[2].stop();
                keyboardKeys.KeyE.pressed = false;
                pianoKeys.f_sharp_2.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[3]:
                playingNotes[3].stop(); 
                keyboardKeys.KeyR.pressed = false;
                pianoKeys.g_2.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[4]:
                playingNotes[4].stop();               
                keyboardKeys.KeyT.pressed = false;
                pianoKeys.g_sharp_2.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[5]:
                playingNotes[5].stop();
                keyboardKeys.KeyA.pressed = false;
                pianoKeys.a_2.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[6]:
                playingNotes[6].stop();
                keyboardKeys.KeyS.pressed = false;
                pianoKeys.a_sharp_2.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[7]:
                playingNotes[7].stop();
                keyboardKeys.KeyD.pressed = false;
                pianoKeys.b_2.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[8]:
                playingNotes[8].stop(); 
                keyboardKeys.KeyF.pressed = false;
                pianoKeys.c_3.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[9]:
                playingNotes[9].stop(); 
                keyboardKeys.KeyG.pressed = false;
                pianoKeys.c_sharp_3.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[10]:
                playingNotes[10].stop();
                keyboardKeys.KeyZ.pressed = false;
                pianoKeys.d_3.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[11]:
                playingNotes[11].stop(); 
                keyboardKeys.KeyX.pressed = false;
                pianoKeys.d_sharp_3.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[12]: 
                playingNotes[12].stop();              
                keyboardKeys.KeyC.pressed = false;
                pianoKeys.e_3.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[13]:
                playingNotes[13].stop();
                keyboardKeys.KeyV.pressed = false;
                pianoKeys.f_3.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[14]:
                playingNotes[14].stop();
                keyboardKeys.KeyB.pressed = false;
                pianoKeys.f_sharp_3.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[15]:
                playingNotes[15].stop();
                keyboardKeys.KeyN.pressed = false;
                pianoKeys.g_3.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[16]:
                playingNotes[16].stop();
                keyboardKeys.KeyM.pressed = false;
                pianoKeys.g_sharp_3.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[17]:
                playingNotes[17].stop();
                keyboardKeys.Comma.pressed = false;
                pianoKeys.a_3.classList.remove('pressed_white');
                break;

            case arrayOfKeyboardKeys[18]:
                playingNotes[18].stop();
                keyboardKeys.Period.pressed = false;
                pianoKeys.a_sharp_3.classList.remove('pressed_black');
                break;

            case arrayOfKeyboardKeys[19]:
                playingNotes[19].stop();
                keyboardKeys.KeyH.pressed = false;
                pianoKeys.b_3.classList.remove('pressed_white');
                break;
            case arrayOfKeyboardKeys[20]: 
                playingNotes[20].stop();
                keyboardKeys.KeyJ.pressed = false;
                pianoKeys.c_4.classList.remove('pressed_white');
                break;
            case arrayOfKeyboardKeys[21]: 
                playingNotes[21].stop();
                keyboardKeys.KeyK.pressed = false;
                pianoKeys.c_sharp_4.classList.remove('pressed_black');
                break;
            case arrayOfKeyboardKeys[22]:
                playingNotes[22].stop();
                keyboardKeys.KeyL.pressed = false;
                pianoKeys.d_4.classList.remove('pressed_white');
                break;
            case arrayOfKeyboardKeys[23]:
                playingNotes[23].stop();
                keyboardKeys.Semicolon.pressed = false;
                pianoKeys.d_sharp_4.classList.remove('pressed_black');
                break;
            case arrayOfKeyboardKeys[24]:
                playingNotes[24].stop();
                keyboardKeys.KeyY.pressed = false;
                pianoKeys.e_4.classList.remove('pressed_white');
                break;
            case arrayOfKeyboardKeys[25]:
                playingNotes[25].stop();
                keyboardKeys.KeyU.pressed = false;
                pianoKeys.f_4.classList.remove('pressed_white');
                break;
            case arrayOfKeyboardKeys[26]:
                playingNotes[26].stop();
                keyboardKeys.KeyI.pressed = false;
                pianoKeys.f_sharp_4.classList.remove('pressed_black');
                break;
            case arrayOfKeyboardKeys[27]:
                playingNotes[27].stop();
                keyboardKeys.KeyO.pressed = false;
                pianoKeys.g_4.classList.remove('pressed_white');
                break;
            case arrayOfKeyboardKeys[28]:
                playingNotes[28].stop();
                keyboardKeys.KeyP.pressed = false;
                pianoKeys.g_sharp_4.classList.remove('pressed_black');
                break;
            case arrayOfKeyboardKeys[29]:
                playingNotes[29].stop();
                keyboardKeys.Digit8.pressed = false;
                pianoKeys.a_4.classList.remove('pressed_white');
                break;
            case arrayOfKeyboardKeys[30]:
                playingNotes[30].stop();
                keyboardKeys.Digit9.pressed = false;
                pianoKeys.a_sharp_4.classList.remove('pressed_black');
                break;
            case arrayOfKeyboardKeys[31]:
                playingNotes[31].stop();
                keyboardKeys.Digit0.pressed = false;
                pianoKeys.b_4.classList.remove('pressed_white');
                break;
        }
    })
})
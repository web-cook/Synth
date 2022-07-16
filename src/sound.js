export default class Sound {
    constructor(context, wavetype) {
        this.context = context;
        this.wavetype = wavetype;
        this.gain = this.context.createGain();
    }

    init(note) {
        this.gain.connect(this.context.destination);
        this.oscillator = this.context.createOscillator();
        this.oscillator.connect(this.gain);
        this.oscillator.setPeriodicWave(this.wavetype); 
        this.oscillator.frequency.setValueAtTime(note, this.context.currentTime);
    }

    play(note) {
        this.init(note);
        this.oscillator.start();
    }

    stop() {
        this.oscillator.stop();
    }

    changeGain(level) {
        this.gain.gain.value = level;
    }
}
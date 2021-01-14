import md5 from 'md5';

class BLock {
    constructor(id, prevHash, payload, difficulty) {
        this.id = id;
        this.prevHash = prevHash;
        this.payload = payload;
        this.nonce = 0;
        this.difficulty = difficulty
    }

    mine() {
        let result = '';
        while (!result.startsWith('0'.repeat(this.difficulty))) {
            this.nonce++;
            result = md5(this.payload + this.prevHash + this.nonce);
        }
        this.hash = result;
    }

    validate() {
        return this.hash == md5(this.payload + this.prevHash + this.nonce);
    }
}

export default BLock;
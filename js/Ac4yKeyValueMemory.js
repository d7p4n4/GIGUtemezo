class Ac4yKeyValueMemory {

    constructor(object){this.empty();}
    empty(){this.store={};}
    getStore(){return this.store;}
    setStore(store){return this.store=store;}
    get(key){return this.store[key];}
    size(){return Object.keys(this.store).length;}
    exists(key){if (this.store[key]) return true; else return false;}
    put(key, value){this.store[key]=value;}
    remove(key){delete this.store[key];}

    getKeyList(){

        var result = [];

        for (var key in this.getStore()) {result.push(key);}

        return result;

    } // getKeyList
    
    fetch(processor){

        Object.getOwnPropertyNames(this.getStore()).forEach( (key, index) => {
            processor(key, this.getStore()[key], index);
        });

    } // fetch
    
    add(source){source.fetch( (key, value, index) => { this.put(key, value)} )}
    
} // Ac4yKeyValueMemory
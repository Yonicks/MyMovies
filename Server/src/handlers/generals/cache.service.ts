import NodeCache from "node-cache";

export class CacheService {
    cache: NodeCache;

    constructor(ttlSeconds: number) {
        this.cache = new NodeCache({stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false});
    }

    get(key: string, storeFunction: Function) {
        const value = this.cache.get(key);
        if (value) {
            return Promise.resolve(value);
        }

        return storeFunction().then((result: any) => {
            this.cache.set(key, result);
            return result;
        });
    }

    del(keys: string | string[]) {
        this.cache.del(keys);
    }

    delStartWith(startStr = "") {
        if (!startStr) {
            return;
        }

        const keys = this.cache.keys();
        for (const key of keys) {
            if (key.indexOf(startStr) === 0) {
                this.del(key);
            }
        }
    }

    flush() {
        this.cache.flushAll();
    }
}

export default CacheService;


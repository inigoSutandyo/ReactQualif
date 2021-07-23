import React from 'react'


export default class FavoriteList {
    static myInstance = null;

    _list = [];

    static getInstance() {
        if (FavoriteList.myInstance == null) {
            FavoriteList.myInstance = new FavoriteList;
    
        }
        return this.myInstance;
    }

    getList() {
        return this._list;
    }

    setList(list) {
        this._list = list;
    }

    addList(artist) {
        if (this._list.indexOf(artist) == -1) {
            this._list.push(artist);
        }
        
    }

    removeList(artist) {
        const index = this._list.indexOf(artist);
        if (index > -1) {
            this._list.splice(index, 1);
        }
    }
    
}
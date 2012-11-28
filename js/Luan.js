"use strict";

    var Luan = Luan || {};
    Luan.Utils = Luan.Utils || {};
    Luan.Models = Luan.Models || {};
    Luan.Views = Luan.Views || {};

    /**
     * Main
    */

    Luan.Utils = {

        AppStart: function () {
            Luan.Views.Logs(Luan.Views.messageViews.MSGinit);

            //Init Singleton
            Luan.Utils.singleton.init();
            /*** validação pra quando elemento não existir
            var el = document.getElementById('elemento'); 
            el.addEventListener("click", this.imprime, false);
            ***/
        },

        imprime: function () {
            console.log(Luan.Utils.config.CONSTANTS.STATEVIEW.DDINPROGRESS);
        }
    };

    /**
     * Global Configuration
    */


    Luan.Utils.config = {
        version: "1.0.1",
        statusApp: "Loaded",
        timeRun: "full time",
        queued: false,

        CONSTANTS: {
            INIT: { INITOK: 1, INITFAIL: 0},
            STATEVIEW: { IDLE: "IDLE", DDINPROGRESS: "DDINPROGRESS"}
        }
    };


    /**
     * Init Singleton
    */

    Luan.Utils.Singleton = {};


    /**
     * Models
    */

    Luan.Models = {
        CollectionItens: [],

        setCollection: function (o) {
            return this.CollectionItens.push(o);
        }
    };

    Luan.Models.List = {
        ListItens: [
            {Name : "Produto1", Price : 8.10, InStock : true },
            {Name : "Produto2", Price : 8.20, InStock : true },
            {Name : "Produto",  Price : 8.30, InStock : false},
            {Name : "Produto3", Price : 8.40, InStock : true },
            {Name : "Produto4", Price : 8.50, InStock : true }
        ],

        totalList: function () {
            Luan.Views.Logs(Luan.Views.messageViews.MSGLoadData);
            return Luan.Models.List.ListItens.length;
        },

        getItens: function () {
            console.log(ListItens);
        },

        setItens : Luan.Models.setCollection()
    };


    /**
     * Views
    */

    Luan.Views = {
        messageViews: {
            MSGinit: 'Application initialized...',
            MSGFinish: 'Application Finishing...',
            MSGLoadData: 'Data Loaded',
            initSingleton: "Singleton initialized..."
        },

        Logs: function (msg) {
            console.log(msg);
        }
    };
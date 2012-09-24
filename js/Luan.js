var Luan = Luan || {};
           Luan.Utils = Luan.Utils || {};
           Luan.Models = Luan.Models || {};
           Luan.Views = Luan.Views || {};


            //Models
             Luan.Models = {
                CollectionItens: new Array(),

                setCollection: function(o){
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

                totalList: function() {
                    Luan.Views.Logs(Luan.Views.messageViews.MSGLoadData);
                    return Luan.Models.List.ListItens.length;
                },

                getItens: function(){
                    consol.log(ListItens);
                },

                setItens : Luan.Models.setCollection()
            };

            
            Luan.Views = {
                messageViews: {
                    MSGinit: 'Application initialized...',
                    MSGFinish: 'Application Finishing...',
                    MSGLoadData: 'Data Loaded'
                },

                Logs: function (msg){
                    console.log(msg)
                }
            };


           
            Luan.Utils = {

                //Main
                AppStart: function(){
                    Luan.Views.Logs(Luan.Views.messageViews.MSGinit);
                    
                    var el = document.getElementById('elemento');
                    el.addEventListener("click", Luan.Utils.imprimeProdutos, false);
                }
            };

           
            //Initialize Aplicativo
            Luan.App = (function () {
                var init = function () {
                    Luan.Utils.AppStart();
                };
                 
                return {
                    init: init
                };
            }());
             
            Luan.App.init();
var Luan = Luan || {};
            Luan.Utils = Luan.Utils || {};
            Luan.Models = Luan.Models || {};
            Luan.Views = Luan.Views || {};


            //Models
             Luan.Models = {
                Produtos: new Array(),

                Produtosinsert: function(o){
                   this.Produtos.push(o);
                },
            };

            Luan.Models.List = {
                ListItens: [
                        {Name : "Fxf", Price : 8.10, InStock : true},
                        {Name : "fre", Price : 8.20, InStock : true},
                        {Name : "fsa", Price : 8.30, InStock : false},
                        {Name : "swe", Price : 8.40, InStock : true},
                        {Name : "fop", Price : 8.50, InStock : true}
                    ],

                totalList: function() {
                    Luan.Views.Logs(Luan.Views.messageViews.MSGLoadData);
                    return Luan.Models.List.ListItens.length;
                }
                
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
                imprimeProdutos: function(){

                },

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
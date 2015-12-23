var buildWeb = function(moduleName,enableLocalstorage){
    
    var fixUrl = function(url){
        var scripts = document.getElementsByTagName('script');
        return scripts[0].src.split('config.js')[0]+url;
    }

    var loadScript = function (url, callback){
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;
        // Fire the loading
        head.appendChild(script);
    }

    var configRequire = function() {
        require.config({
            baseUrl: fixUrl(''),
            paths: {
                react: 'lib/react.min',       
                comment: 'components/commentbox'      
            },
            basket: {
                excludeAll: true,
                excludes: [],
                unique:{
                    comment: 2
                    //util: 1 //change the number after edit util.js file (it will reload and recache it)
                }
            }
        });
        require(['react'],function(React){
            require([moduleName],function(Module){
                React.render(React.createElement(Module, null),document.body);
            });
        });
    }

    if(enableLocalstorage) {
        loadScript(fixUrl('lib/basket.js'),function() {
            basket.require({ url: fixUrl('lib/require.min.js'),unique:1 })
            .then(function(){
                basket.require({ url: fixUrl('lib/basket-loader.js'), key: 'basket_loader',execute:true, unique:1 })
                .then(function(){
                    configRequire();
                })
            }) 
        });
    } else {
        loadScript(fixUrl('lib/require.min.js'),function(){
            configRequire();
        }); 
    }
    
}







const layerUtils = {
    layer_common_size: '600px',
    layer_small_size: '400px',
    layer_content: function(title, size, html, init, fn){
        layer.open({
            title: title,
            type: 1,
            area: size, //宽高
            content: html,
            btn: ['确定', '取消'],
            zIndex: 50,
            success: function(){
                if (typeof init === "function") init();
            },
            yes: function(index, layero){
                if (typeof fn === "function") fn();
            },
            cancel: function(index, layero){
                layer.close(index);
            },
            end: function(index, layero){
                layer.close(index);
            }
        });
    },
    //弹窗关闭和取消按钮也自定义回调方法
    layer_content_all: function(title, size, html, init, fn, fn1){
        layer.open({
            title: title,
            type: 1,
            area: size, //宽高
            content: html,
            btn: ['确定', '取消'],
            zIndex: 50,
            success: function(){
              if (typeof init === "function") init();
            },
            yes: function(index, layero){
              if (typeof fn === "function") fn();
            },
            cancel: function(index, layero){
              layer.close(index);
              if (typeof fn1 === "function") fn1();
            },
            end: function(index, layero){
              layer.close(index);
              if (typeof fn1 === "function") fn1();
            }
        });
    },
    //弹窗只有下一步和取消按钮
    layer_next_content: function(title, size, html, init, fn){
        layer.open({
            title: title,
            type: 1,
            area: size, //宽高
            content: html,
            btn: ['下一步', '取消'],
            zIndex: 50,
        success: function(){
            if (typeof init === "function") init();
        },
        yes: function(index, layero){
            if (typeof fn === "function") fn();
        },
        cancel: function(index, layero){
            layer.close(index);
        },
        end: function(index, layero){
            layer.close(index);
        }
        });
    },
    layer_again_upload_content: function(title, size, html, init, fn){
        layer.open({
            title: title,
            type: 1,
            area: size, //宽高
            content: html,
            btn: ['重新上传'],
            zIndex: 50,
            closeBtn:0,
            success: function(){
                if (typeof init === "function") init();
            },
            yes: function(index, layero){
                if (typeof fn === "function") fn();
            }
        });
    },
    //弹窗只有下一步和继续添加按钮
    layer_saveSuccess_content: function(title, size, html, init, fn,fn1){
        layer.open({
            title: title,
            type: 1,
            area: size, //宽高
            content: html,
            btn: ['确定', '继续添加'],
            zIndex: 50,
            success: function(){
                if (typeof init === "function") init();
            },
            yes: function(index, layero){
                if (typeof fn === "function") fn();
            },
            cancel: function(index, layero){
                if (typeof fn1 === "function") fn1();
                layer.close(index);
            },
            end: function(index, layero){
                if (typeof fn1 === "function") fn1();
                layer.close(index);
            }
        });
    },
    //弹窗没有按钮的
    layer_nobtn_content: function(title, size, html, init){
        return layer.open({
            title: title,
            id:"pldiv",
            type: 1,
            area: size, //宽高
            content: html,
            zIndex: 50,
            success: function(){
                init();
            },
            cancel: function(index, layero){
                layer.close(index);
            },
            end: function(index, layero){
                layer.close(index);
            }
            });
    },
    //自定义确定按钮回调弹出层
    layer_content_returnIndex: function(title, size, html, init, fn){
        layer.open({
            title: title,
            type: 1,
            area: size, //宽高
            content: html,
            btn: ['确定', '取消'],
            zIndex: 50,
            success: function(){
                init();
            },
            yes: function(index, layero){
                fn(index);
            },
            cancel: function(index, layero){
                layer.close(index);
            },
            end: function(index, layero){
                layer.close(index);
            }
        });
    }
}

export default layerUtils;

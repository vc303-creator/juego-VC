gdjs.MenuPPalCode = {};
gdjs.MenuPPalCode.localVariables = [];
gdjs.MenuPPalCode.idToCallbackMap = new Map();
gdjs.MenuPPalCode.GDNewTextObjects1= [];
gdjs.MenuPPalCode.GDNewTextObjects2= [];
gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1= [];
gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects2= [];
gdjs.MenuPPalCode.GDcjObjects1= [];
gdjs.MenuPPalCode.GDcjObjects2= [];
gdjs.MenuPPalCode.GDNewTiledSprite2Objects1= [];
gdjs.MenuPPalCode.GDNewTiledSprite2Objects2= [];
gdjs.MenuPPalCode.GDIzquierdaObjects1= [];
gdjs.MenuPPalCode.GDIzquierdaObjects2= [];
gdjs.MenuPPalCode.GDDerechaObjects1= [];
gdjs.MenuPPalCode.GDDerechaObjects2= [];
gdjs.MenuPPalCode.GDAbajoObjects1= [];
gdjs.MenuPPalCode.GDAbajoObjects2= [];
gdjs.MenuPPalCode.GDArribaObjects1= [];
gdjs.MenuPPalCode.GDArribaObjects2= [];
gdjs.MenuPPalCode.GDGold_9595CoinObjects1= [];
gdjs.MenuPPalCode.GDGold_9595CoinObjects2= [];
gdjs.MenuPPalCode.GDtxt_9595vidasObjects1= [];
gdjs.MenuPPalCode.GDtxt_9595vidasObjects2= [];
gdjs.MenuPPalCode.GDtxt_9595monedasObjects1= [];
gdjs.MenuPPalCode.GDtxt_9595monedasObjects2= [];
gdjs.MenuPPalCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuPPalCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuPPalCode.GDmeatObjects1= [];
gdjs.MenuPPalCode.GDmeatObjects2= [];


gdjs.MenuPPalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1[k] = gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena1", false);
}
}

}


};

gdjs.MenuPPalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuPPalCode.GDNewTextObjects1.length = 0;
gdjs.MenuPPalCode.GDNewTextObjects2.length = 0;
gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuPPalCode.GDcjObjects1.length = 0;
gdjs.MenuPPalCode.GDcjObjects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.MenuPPalCode.GDIzquierdaObjects1.length = 0;
gdjs.MenuPPalCode.GDIzquierdaObjects2.length = 0;
gdjs.MenuPPalCode.GDDerechaObjects1.length = 0;
gdjs.MenuPPalCode.GDDerechaObjects2.length = 0;
gdjs.MenuPPalCode.GDAbajoObjects1.length = 0;
gdjs.MenuPPalCode.GDAbajoObjects2.length = 0;
gdjs.MenuPPalCode.GDArribaObjects1.length = 0;
gdjs.MenuPPalCode.GDArribaObjects2.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuPPalCode.GDmeatObjects1.length = 0;
gdjs.MenuPPalCode.GDmeatObjects2.length = 0;

gdjs.MenuPPalCode.eventsList0(runtimeScene);
gdjs.MenuPPalCode.GDNewTextObjects1.length = 0;
gdjs.MenuPPalCode.GDNewTextObjects2.length = 0;
gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuPPalCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuPPalCode.GDcjObjects1.length = 0;
gdjs.MenuPPalCode.GDcjObjects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.MenuPPalCode.GDIzquierdaObjects1.length = 0;
gdjs.MenuPPalCode.GDIzquierdaObjects2.length = 0;
gdjs.MenuPPalCode.GDDerechaObjects1.length = 0;
gdjs.MenuPPalCode.GDDerechaObjects2.length = 0;
gdjs.MenuPPalCode.GDAbajoObjects1.length = 0;
gdjs.MenuPPalCode.GDAbajoObjects2.length = 0;
gdjs.MenuPPalCode.GDArribaObjects1.length = 0;
gdjs.MenuPPalCode.GDArribaObjects2.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects1.length = 0;
gdjs.MenuPPalCode.GDGold_9595CoinObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595vidasObjects2.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.MenuPPalCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.MenuPPalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuPPalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuPPalCode.GDmeatObjects1.length = 0;
gdjs.MenuPPalCode.GDmeatObjects2.length = 0;


return;

}

gdjs['MenuPPalCode'] = gdjs.MenuPPalCode;

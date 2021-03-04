import * as constants from '../urlConstants';

export const getBubbleBundles = async () => {
    const result = await fetch(constants.BUNDLES);
    if(!result.ok) { return []; }
    const bundles = await result.json();
    const bubbles = await getBubbles();
    const bundleGroup = {};
    for (let i = 0; i<bundles.length; i++){
        const currentBundle = bundles[i];
        const id = currentBundle.id;
        bundleGroup[currentBundle.id] ={
            ...currentBundle,
            bubbles: [],
        }
        for (let j = 0; j < bundles[i].items.length; j++){
            let num = bundles[i].items[j]-1;
            bundleGroup[id].bubbles.push(bubbles[num]);
        }
    }   

    return bundleGroup;
}


export const getBubbles = async() => {
    const result = await fetch(constants.BUBBLES);
    if(!result.ok) { return []; }
    return result.json();

}


export function getSingleBundle (bundles, bubbles){
    // console.log(bundles);
    // console.log(bubbles);
    const bundleGroup = {};
    const currentBundle = bundles;
    const id = currentBundle.id;
    bundleGroup[currentBundle.id] = {
        ...currentBundle,
        bubbles: [],
    }
    for (let j = 0; j < bundles.items.length; j++){
        let num = bundles.items[j]-1;
        bundleGroup[id].bubbles.push(bubbles[num]);
    }

    return bundleGroup;
    
}


import HiddenObjectsData from 'data/hidden-objects.json'

interface HiddenObjects {
    name: string,
    image: string,
}

export const hiddenObjects: HiddenObjects[] = HiddenObjectsData.hiddenObjects;

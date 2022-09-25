export enum GAME_SCREEN_SIZE {
    WIDTH =  window.innerWidth,
    HEIGHT = window.innerHeight - window.innerHeight * .20,
}

export enum GAME_RULES {
    MISSED_ATTEMPTS = 3,
    TOTAL_OBJECTS_TO_FIND = 10,
}

export enum HIDDEN_OBJECT_LIMITS {
    ROTATION = 360,
    SCALE_MIN = 0.8,
    SCALE_MAX = 1.2,
    VISIBILITY_MIN = 0.5,
    VISIBILITY_MAX = 0.8,
}

export enum DIRECTIONS {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    TOP_LEFT = 'top-left',
    TOP_RIGHT = 'top-right',
    BOTTOM = 'bottom',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_RIGHT = 'bottom-right',
}
import { createStore } from "redux";

const SWITCH = "SWITCH";

const switchSlide = (direction) => ({
  type: SWITCH
  , direction
})


const initialState = {
  currentSlide: 0
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SWITCH
    : {
      switch(typeof action.direction) {
        case "string"
        : {
          return action.direction === "right"
            ? state.currentSlide > 0
              ? state
              : {...state, currentSlide: state.currentSlide + 1}
            : state.currentSlide < 1
              ? state
              : {...state, currentSlide: state.currentSlide - 1}
        }
        case "object"
        : {
          return action.direction.key === "ArrowRight"
            ? state.currentSlide > 0
              ? state
              : {...state, currentSlide: state.currentSlide + 1}
            : action.direction.key === "ArrowLeft"
              ? state.currentSlide < 1
                ? state
                : {...state, currentSlide: state.currentSlide - 1}
              : state
        }
      }
    }
    default
    : return state;
  }
}

export const store = createStore(reducer);

export const mapStateToProps = (state) => ({
  currentSlide: state.currentSlide
})

export const mapDispatchToProps = (dispatch) => ({
  switchSlide : (direction) => dispatch(switchSlide(direction))
})
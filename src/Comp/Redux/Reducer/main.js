import { productsReducer} from"./Productreducer";
import{combineReducers} from "redux";

const rootreducers = combineReducers({
    productsdata:productsReducer
});

export default rootreducers;
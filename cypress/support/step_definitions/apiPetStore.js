/// <reference types="cypress" />
import {defineStep} from "cypress-cucumber-preprocessor/steps";
const apiPetStore = require('../pages/apiPetStore.page')

defineStep("I add a Pet to the store", ()=>{
    const currentTimestamp = new Date().getTime();
    apiPetStore.addPet(currentTimestamp)


})

defineStep("I add a pet and search it by a unique id",()=>{
    const currentTimestamp = new Date().getTime();
    apiPetStore.addPet(currentTimestamp)
    apiPetStore.searchPetById(currentTimestamp)

})


defineStep("I update a Pet to the store", ()=>{
    const currentTimestamp = new Date().getTime();
    apiPetStore.addPet(currentTimestamp)


}
);


 
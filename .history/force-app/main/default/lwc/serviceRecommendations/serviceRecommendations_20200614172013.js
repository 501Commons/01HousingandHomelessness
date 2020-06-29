/* eslint-disable no-console */
import { LightningElement, track, api } from 'lwc';

import getRecs from '@salesforce/apex/getRecommendations.getRecommendations'

export default class ServiceRecommendations extends LightningElement {
    @track returnRecommendations;
    @api recordId;
    @track serviceId;

    @track showRecommendations = false;
    @track showRelevancePopover = false;
    @track showDropdown = false;
    @track showAddComment = false;
    @track showExpandedMap = false

    handleRequestRecommendations(){
        console.log('getting recommendations');
        console.log('recorid Id'+ this.recordId)
        getRecs({contactId: this.recordId})
            .then((result) => {
                window.console.log('success');
                if(this.showRecommendations === false){
                    this.showRecommendations = !this.showRecommendations;
                }
                window.console.log('result' + JSON.stringify(result));
                this.returnRecommendations = result;
            })
            .catch((error) => {
                window.console.log('error:' + error);
            });
    }

    handleExpand(){
        this.showExpandedMap = !this.showExpandedMap;
    }

    


}
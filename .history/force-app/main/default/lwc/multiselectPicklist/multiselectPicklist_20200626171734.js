import { LightningElement } from 'lwc';

export default class MultiSelectPicklist extends LightningElement{
    typeFilters = [];
    label = 'Show Me';
    apiName = '';
    selectOptionText = 'View All';
    picklistValues = ['Food', 'Education','Housing', 'Goods', 'Transit', 'Health','Money','Care', 'Work','Legal'];
    multiSelectListClass = 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click';


    openMultiSelectPicklist(){
        if(this.multiSelectListClass === 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click'){
            this.multiSelectListClass = 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open';
        }
        else{
            this.multiSelectListClass = 'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click';
        }
    }

    handleUpdateFilterList(event){
        window.console.log('in multiselect' + event.detail.value);
        let filterList = this.typeFilters;
        if(filterList.includes(event.detail.value)){
            const index = filterList.indexOf(event.detail.value);
            filterList.splice(index, 1);
        }else{
            filterList.push(event.detail.value);
        }
        window.console.log('list' + filterList);

        this.typeFilters = filterList;
        let filterdetail = {};
        filterdetail.list = this.typeFilters;


        const selectfiltersEvent = new CustomEvent('selectedfilters', {
            types: filterdetail,
            bubbles: true,
            composed: true
        });
        window.console.log('selectfiltersEvent' + selectfiltersEvent.types);
        this.dispatchEvent(selectfiltersEvent);
    }
}
import {  ContentItem } from '@kontent-ai/kontent-delivery';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class Office extends ContentItem {

  constructor(){
    super({
      propertyResolver: ((fieldName) => {
                
        if (fieldName === 'zip_code'){
          return 'zipCode';
        }

      }),
      linkResolver: (link) => resolveContentLink(link)
    })    
  }
    
}
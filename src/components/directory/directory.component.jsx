import React from 'react';
import { connect } from 'react-redux';
import {selectDirectorySections }  from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';


      const Directory = ({sections}) => (
        <div className = 'directory-menu'>
               {
                   sections.map(({id, ...otherSectionProps}) => (
                       <MenuItem key={id} {...otherSectionProps} />
                   ))
               }
            </div>

      ); 
      
      const mapStateToProps = createStructuredSelector ({
        sections: selectDirectorySections
      })
  
export default connect(mapStateToProps)(Directory);
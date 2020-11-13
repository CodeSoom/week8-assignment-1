import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SubContainer from '../styles/SubContainer';
import MenuList from '../styles/MenuList';
import MenuItem from '../styles/MenuItem';

import {
  selectRegion,
  loadRestaurants,
} from '../modules/slice';

import { get } from '../modules/utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <SubContainer>
      <h3>지역</h3>
      <MenuList>
        {regions.map((region) => (
          <MenuItem
            key={region.id}
            active={selectedRegion && region.id === selectedRegion.id}
          >
            <button
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {region.name}
            </button>
          </MenuItem>
        ))}
      </MenuList>
    </SubContainer>
  );
}
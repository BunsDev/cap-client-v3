import { get } from 'svelte/store'

import { selectProduct, selectCurrency, getUserPositions, getPoolInfo } from './methods'
import { getUserTrades } from './graph'

import { currentPage } from '../stores/router'

// TODO: these should probably happen on mount for each component. BUT this can only happen after contracts / address are ready

// Fetchs appropriate data from contracts and APIs. Called on route or signer change
export function hydrateData() {

	const _currentPage = get(currentPage);

	console.log('hydrateData', _currentPage);

	if (!_currentPage || _currentPage == 'home') {
		//selectProduct();
	} else if (_currentPage == 'trade') {
		selectProduct();
		selectCurrency();
		getUserPositions();
		getUserTrades();
	} else if (_currentPage == 'pool') {
		getPoolInfo('weth');
		getPoolInfo('usdc');
	}

}
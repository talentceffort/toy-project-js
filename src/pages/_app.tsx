import type { AppProps } from 'next/app';
import React from 'react';
import '../components/TodoItem.css';
import wrapper from '../modules/store';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);

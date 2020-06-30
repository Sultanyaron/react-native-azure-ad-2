declare module 'react-native-azure-ad-2' {
	import React from 'react';
	import AzureInstance from './AzureInstance';

	export interface AzureLoginViewProps {
		azureInstance: AzureInstance;
		onSuccess: () => void;
		onCancel: () => void;
		loadingMessage?: string;
	}

	export const AzureLoginView: React.StatelessComponent<AzureLoginViewProps>;
	export const AzureInstance: AzureInstance;
}

declare module 'react-native-azure-ad-2' {
	import React from 'react';
	import AzureInstance from './AzureInstance';

	export interface AzureLoginViewProps {
		azureInstance: AzureInstance;
		onSuccess: () => void;
		onCancel: () => void;
		loadingMessage?: string;
	}

	const AzureLoginView: React.StatelessComponent<AzureLoginViewProps>;
	const AzureInstance: AzureInstance;
	export default { AzureLoginView, AzureInstance };
}

import { IExecuteFunctions, ILoadOptionsFunctions} from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
	INodePropertyOptions
} from 'n8n-workflow';
import axios from 'axios'; // Добавляем axios

export class BitrixNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Bitrix Node',
		name: 'BitrixNode',
		group: ['transform'],
		version: 1,
		description: 'Basic Example Node',
		defaults: {
			name: 'Bitrix Node',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			// Node properties which the user gets displayed and
			// can change on the node.
			{
				displayName: 'Responsible',
				name: 'responsible',
				type: 'string',
				default: '',
				placeholder: 'responsible...',
				description: 'The description text',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: 'name...',
				description: 'The description text',
			},
			{
				displayName: 'Phone Number',
				name: 'phone',
				type: 'string',
				default: '',
				placeholder: 'phone...',
				description: 'The description text',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'email...',
				description: 'The description text',
			},
			{
				displayName: "Source",
				name: "source",
				type: "options",
				default: '',
				placeholder: 'Placeholder value',
				description: 'The description text',
				typeOptions: {
					loadOptionsMethod: 'getSource',
				},
			},
			{
				displayName: 'Source Details',
				name: 'sourcedetails',
				type: 'string',
				default: '',
				placeholder: 'Source Details...',
				description: 'The description text',
			},
			{
				displayName: 'Hidden Source',
				name: 'hiddensource',
				type: 'string',
				default: '',
				placeholder: 'Hidden Source...',
				description: 'The description text',
			},
			{
				displayName: "ad_language",
				name: "ad_language",
				type: "options",
				default: '',
				placeholder: 'Placeholder value',
				description: 'The description text',
				typeOptions: {
					loadOptionsMethod: 'ad_language',
				},
			},
			{
				displayName: "Ad_Project",
				name: "Ad_Project",
				type: "options",
				default: '',
				placeholder: 'Placeholder value',
				description: 'The description text',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
				},
			},
			{
				displayName: 'IP Address',
				name: 'ipaddress',
				type: 'string',
				default: '',
				placeholder: 'IP Address...',
				description: 'The description text',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				placeholder: 'Ref URL...',
				description: 'The description text',
			},
			{
				displayName: 'Marker',
				name: 'marker',
				type: 'string',
				default: '',
				placeholder: 'Marker...',
				description: 'The description text',
			},
			{
				displayName: 'GA',
				name: 'ga',
				type: 'string',
				default: '',
				placeholder: 'GA...',
				description: 'The description text',
			},
			{
				displayName: 'UTM Text',
				name: 'utm',
				type: 'string',
				default: '',
				placeholder: 'UTM...',
				description: 'The description text',
			},
			
		],	
		
	};
	
	methods = {
		loadOptions: {
			async getProjects(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>{
				const response = await axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.userfield.list?filter%5BFIELD_NAME%5D=UF_CRM_1568907438')
				// const data = response.data.map((item: any) => ({ name: item.name, value: item.id }))
				// return data;
				const data = response.data.result[0].LIST.map((item: any) => ({name: item.VALUE, value: item.ID}))
				return data
			},

			async getSource(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>{
				const response = await axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.status.list?filter[ENTITY_ID]=SOURCE')
    			const data = response.data.result.map((item: any) => ({name: item.NAME, value: item.ID}))
				return data
			},
			
			async ad_language(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
				  const response = await axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.userfield.list?filter[FIELD_NAME]=UF_CRM_1553165368131');
				  const data = response.data.result[0].LIST.map((item: any) => ({ name: item.VALUE, value: item.ID }));
				  return data;
				} catch (error) {
				  throw error;
				}
			  }

			
		},
	};
	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		//const length = items.length;

		let item: INodeExecutionData;
		let NAME: string;
		let PHONE: string;
		let EMAIL: string;
		let SOURCE_ID: string;
		let UF_CRM_1553506792: string;
		let UF_CRM_1555592415: string;
		let UF_CRM_1553165368131: string;
		let UF_CRM_1568907438: string;
		let UF_CRM_1584379751: string;
		let UF_CRM_1612173846: string;
		let UF_CRM_1612173967: string;
		let UF_CRM_1614422466: string;
		let UTM: string;
		let ASSIGNED_BY_ID: string;


		// Iterates over all input items and add the key "myString" with the
		// value the parameter "myString" resolves to.
		// (This could be a different value for each item in case it contains an expression)
		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				NAME = this.getNodeParameter('name', itemIndex, '') as string;
				PHONE = this.getNodeParameter('phone', itemIndex, '') as string;
				EMAIL = this.getNodeParameter('email', itemIndex, '') as string;
				SOURCE_ID = this.getNodeParameter('source', itemIndex, '') as string;
				UF_CRM_1553506792 = this.getNodeParameter('sourcedetails', itemIndex, '') as string;
				UF_CRM_1555592415 = this.getNodeParameter('hiddensource', itemIndex, '') as string;
				UF_CRM_1553165368131 = this.getNodeParameter('ad_language', itemIndex, '') as string;
				UF_CRM_1568907438 = this.getNodeParameter('Ad_Project', itemIndex, '') as string;
				UF_CRM_1584379751 = this.getNodeParameter('ipaddress', itemIndex, '') as string;
				UF_CRM_1612173846 = this.getNodeParameter('url', itemIndex, '') as string;
				UF_CRM_1612173967 = this.getNodeParameter('marker', itemIndex, '') as string;
				UF_CRM_1614422466 = this.getNodeParameter('ga', itemIndex, '') as string;
				UTM = this.getNodeParameter('utm', itemIndex, '') as string;
				ASSIGNED_BY_ID = this.getNodeParameter('responsible', itemIndex, '') as string;
 
				item = items[itemIndex];

				item.json['name'] = NAME;
				item.json['tel'] = PHONE;
				item.json['Email'] = EMAIL;
				item.json['Source'] = SOURCE_ID;
				item.json['sourcedetails'] = UF_CRM_1553506792;
				item.json['hiddensource'] = UF_CRM_1555592415;
				item.json['ad_language'] = UF_CRM_1553165368131;
				item.json['Ad_Project'] = UF_CRM_1568907438;
				item.json['ipaddress'] = UF_CRM_1584379751;
				item.json['url'] = UF_CRM_1612173846;
				item.json['marker'] = UF_CRM_1612173967;
				item.json['ga'] = UF_CRM_1614422466;
				item.json['utm'] = UTM;

				item.json = {
					fields: {
						ASSIGNED_BY_ID,
						NAME,
						PHONE: [ { VALUE: PHONE, VALUE_TYPE: "WORK" } ],
						EMAIL: [ { VALUE: EMAIL, VALUE_TYPE: "WORK" } ],
						SOURCE_ID,
						UF_CRM_1553506792, 
						UF_CRM_1555592415,
						UF_CRM_1553165368131,
						UF_CRM_1568907438,
						UF_CRM_1584379751,
						UF_CRM_1612173846, 
						UF_CRM_1612173967,
						UF_CRM_1614422466, 
						UTM
					}
				}
				
				await axios.post('https://crm.axcap.ae/rest/1/e6w2jdc3uuz20c84/crm.lead.add.json', item.json)

			} catch (error) {
				// This node should never fail but we want to showcase how
				// to handle errors.
				if (this.continueOnFail()) {
					items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
					
				} else {
					// Adding `itemIndex` allows other workflows to handle this error
					if (error.context) {
						// If the error thrown already contains the context property,
						// only append the itemIndex
						error.context.itemIndex = itemIndex;
						throw error;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex,
					});
				}
			}
		}

		// for (let i = 0; i < length; i++) {
		// 	const data = items[i].json;
	
		// 	// Make HTTP request here
		// 	try {
		// 		await axios.post('https://hook.integromat.com/7ffulgx2fk7ttnsas4nys6y41iohcbyj', data);
		// 		// Optionally, you can process the response here
		// 		// And assign it back to the item's JSON
		// 		// items[i].json = response.data;
		// 	} catch (error) {
		// 		console.error('HTTP request failed', error);
		// 		throw new NodeOperationError(this.getNode(), 'HTTP request failed');
		// 	}
		// }

		return this.prepareOutputData(items);
	}

	
}

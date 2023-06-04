import { rtkApi } from '@/shared/api/rtkApi';

export const greenApiRtk = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getMessages: build.query({
			query: ({ userId, userToken }) => ({
				url: `waInstance${userId}/receiveNotification/${userToken}`,
			}),
		}),
	}),
});

export const useGreenApiRtk = greenApiRtk.useGetMessagesQuery;

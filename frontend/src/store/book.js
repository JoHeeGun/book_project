import axios from 'axios';
import _ from 'lodash';

export default {
  namespaced: true,
  state: () => ({
    books: [],
    message: '궁금한 책에 대해서 검색해 보세요!',
  }),
  getters: '',
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async searchBooks({ commit }, payload) {
      try {
        const { sort, target, title, size } = payload;
        const api = await axios.get(
          `https://dapi.kakao.com/v3/search/book?sort=${sort}&target=${target}&page=1`,
          {
            headers: {
              Authorization: 'KakaoAK 3b9b7e5018ae18db72532378d670854e',
            },
            params: {
              query: title,
            },
          },
        );
        const { documents } = api.data;
        const { total_count } = api.data.meta;

        commit('updateState', {
          books: _.uniqBy(documents, 'isbn'),
          message: '',
        });

        const pageLength = Math.ceil(total_count / 10);

        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page += 1) {
            if (page > size / 10) {
              break;
            }
            const api = await axios.get(
              `https://dapi.kakao.com/v3/search/book?sort=${sort}&target=${target}&size=${size}`,
              {
                headers: {
                  Authorization: 'KakaoAK 3b9b7e5018ae18db72532378d670854e',
                },
                params: {
                  query: title,
                },
              },
            );
            const { documents } = api.data;
            commit('updateState', {
              books: _.uniqBy(documents, 'isbn'),
            });
          }
        }
      } catch (message) {
        commit('updateState', {
          books: [],
          message,
        });
      }
    },
  },
};

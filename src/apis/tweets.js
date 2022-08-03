import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  tweets: {
    getTweets() {
      return apiHelper.get(`/tweets`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    getOneTweet({ tweetId }) {
      return apiHelper.get(`/tweets/${tweetId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create({ userId, description }) {
      return apiHelper.post(`/tweets`, { userId, description }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    addLiked({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/like`, null, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    deleteLiked({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    createReply({ tweetId, comment }) {
      return apiHelper.post(`tweets/${tweetId}/replies`, { tweetId, comment }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
  },
  replies: {
    getReplies({ tweetId }) {
      return apiHelper.get(`/tweets/${tweetId}/replies`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
  }
}
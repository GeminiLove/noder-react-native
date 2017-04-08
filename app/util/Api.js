const baseUrl = 'https://cnodejs.org/api/v1/'


export default {
  topics: baseUrl + 'topics',
  topicDetail: baseUrl + 'topic/',
  good: baseUrl + 'topics' + '?tab=good',
  share: baseUrl + 'topics' + '?tab=share',
};

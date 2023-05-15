const FollowerRepository = require("../repositories/follower.repositories");

class FollowerService {
  followerRepository = new FollowerRepository();

  getFollowerAll = async (user_id) => {
    const getFollowData = await this.followerRepository.getFollowerAll(user_id);

    return getFollowData.map((e) => {
      return {
        follow_id: e.follow_id,
        user_id: e.user_id,
        profile_url: e.profile_url,
        createdAt: e.createdAt,
        updatedAt: e.updatedAt,
      };
    });
  };

  postFollower = async (user_id) => {
    const postFollowData = await this.followerRepository.postFollower(user_id);

    return { message: "팔로워 추가 완료" };
  };

  deleteFollower = async (user_id) => {
    const deleteFollowData = await this.followerRepository.deleteFollower(
      user_id
    );

    return { message: "팔로우 취소 완료" };
  };
}

module.exports = FollowerService;
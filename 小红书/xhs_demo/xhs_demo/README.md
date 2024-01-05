# 小红书

# 实现了登录,小红书全部信息爬取

1. 获取首页推荐笔记---------get_search_by_topic
2. 获取搜索指定帖子数据------------------search_topic(   搜索指定帖子, note_typ：0 全部，1 视频，2 图文)(
   sort = ['general', 'popularity_descending', 'time_descending']  # 排序 默认，最热，最新)
3. 通过笔记id获取评论------------- get_note_comment(存在更多评论获取更多评论)
4. 通过用户id用户粉丝ip等详细信息获取-------------get_user（获取名称,小红书ip,简介,关注粉丝,获赞等等）
5. 通过名字 搜索用户信息-get_usersearch
8. 指定用户id下载所有图片或者视频--------save
9. 
10. 获取帖子中的tag_list，这个就是详情页里面的话题--------get_note_topic
11. 获取笔记的详细信息 get_note_detail
12. 获取需要下载的全部链接 , 这里入库的时候使用 get_all_urls
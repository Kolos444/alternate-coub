export interface Root {
	page: number;
	per_page: number;
	total_pages: number;
	coubs: Coub[];
}

export interface Coub {
	flag: boolean;
	abuses: any;
	recoubs_by_users_channels: any[];
	favourite: boolean;
	pinned: boolean;
	promoted_id: any;
	recoub: boolean;
	like: boolean;
	dislike: boolean;
	reaction: string;
	in_my_best2015: boolean;
	id: number;
	type: string;
	permalink: string;
	title: string;
	visibility_type: string;
	original_visibility_type: string;
	channel_id: number;
	created_at: string;
	updated_at: string;
	is_done: boolean;
	views_count: number;
	cotd?: boolean;
	cotd_at?: string;
	visible_on_explore_root: boolean;
	visible_on_explore: boolean;
	featured: boolean;
	published: boolean;
	published_at: string;
	reversed: boolean;
	moderation_state: string;
	editing_locked: boolean;
	is_nft: any;
	from_editor_v2: boolean;
	is_editable: boolean;
	original_sound: boolean;
	has_sound: boolean;
	recoub_to: any;
	file_versions: FileVersions;
	audio_versions: AudioVersions;
	image_versions: ImageVersions;
	first_frame_versions: FirstFrameVersions;
	dimensions: Dimensions;
	site_w_h: number[];
	page_w_h: number[];
	site_w_h_small: number[];
	size: number[];
	age_restricted: boolean;
	age_restricted_by_admin: boolean;
	not_safe_for_work?: boolean;
	allow_reuse: boolean;
	dont_crop: boolean;
	banned: boolean;
	global_safe?: boolean;
	audio_file_url?: string;
	external_download: any;
	application: any;
	channel: Channel;
	file: any;
	picture: string;
	timeline_picture: string;
	small_picture: string;
	sharing_picture: any;
	percent_done: number;
	tags: Tag[];
	categories: Category[];
	communities: Community[];
	music: any;
	celebrities: string[];
	recoubs_count: number;
	remixes_count: number;
	likes_count: number;
	dislikes_count: number;
	comments_count: number;
	translated_title: any;
	raw_video_id: any;
	uploaded_by_ios_app: boolean;
	uploaded_by_android_app: boolean;
	media_blocks: MediaBlocks;
	raw_video_thumbnail_url: string;
	raw_video_title: string;
	video_block_banned: boolean;
	duration: number;
	promo_winner: boolean;
	promo_winner_recoubers?: [number, string][];
	editorial_info: EditorialInfo;
	promo_hint: any;
	beeline_best_2014: any;
	from_web_editor: boolean;
	normalize_sound: boolean;
	normalize_change_allowed: boolean;
	best2015_addable: boolean;
	ahmad_promo: any;
	promo_data: any;
	audio_copyright_claim: any;
	ads_disabled?: boolean;
	is_safe_for_ads: boolean;
	feed_source: string;
	position_on_page: number;
}

export interface FileVersions {
	html5: Html5;
	mobile: Mobile;
	share: Share;
}

export interface Html5 {
	video: Video;
	audio: Audio;
}

export interface Video {
	high: High;
	med: Med;
}

export interface High {
	url: string;
	size: number;
}

export interface Med {
	url: string;
	size: number;
}

export interface Audio {
	high: High2;
	med: Med2;
	sample_duration?: number;
}

export interface High2 {
	url: string;
	size: number;
}

export interface Med2 {
	url: string;
	size: number;
}

export interface Mobile {
	video: string;
	audio: string[];
}

export interface Share {
	default: string;
}

export interface AudioVersions {
	template?: string;
	versions?: string[];
}

export interface ImageVersions {
	template: string;
	versions: string[];
}

export interface FirstFrameVersions {
	template: string;
	versions: string[];
}

export interface Dimensions {
	big: number[];
	med: number[];
}

export interface Channel {
	id: number;
	permalink: string;
	title: string;
	description?: string;
	i_follow_him: boolean;
	follows_by_users_channels: any[];
	followers_count: number;
	following_count: number;
	avatar_versions: AvatarVersions;
	views_count: number;
}

export interface AvatarVersions {
	template: string;
	versions: string[];
}

export interface Tag {
	id: number;
	title: string;
	value: string;
}

export interface Category {
	id: number;
	title: string;
	permalink: string;
	subscriptions_count: number;
	big_image_url: string;
	small_image_url: string;
	med_image_url: string;
	visible: boolean;
}

export interface Community {
	id: number;
	title: string;
	permalink: string;
	subscriptions_count: number;
	big_image_url: string;
	small_image_url: string;
	med_image_url: string;
	i_subscribed: boolean;
	community_notifications_enabled: boolean;
	description: Description;
}

export interface Description {
	id: number;
	description: string;
	rules: string[];
	description_html: string;
	rules_html: string[];
}

export interface MediaBlocks {
	uploaded_raw_videos: any[];
	external_raw_videos: ExternalRawVideo[];
	remixed_from_coubs: RemixedFromCoub[];
	external_video?: ExternalVideo;
}

export interface ExternalRawVideo {
	id: number;
	title: string;
	url: string;
	image: string;
	image_retina: string;
	meta: Meta;
	duration: number;
	raw_video_id: number;
	has_embed: boolean;
}

export interface Meta {
	service: string;
	duration: string;
}

export interface RemixedFromCoub {
	id: number;
	title: string;
	url: string;
	image: string;
	image_retina: string;
	meta: Meta2;
	duration: any;
	coub_channel_title: string;
	coub_channel_permalink: string;
	coub_views_count: number;
	coub_likes_count: number;
	coub_permalink: string;
}

export interface Meta2 {
	duration: string;
}

export interface ExternalVideo {
	id: number;
	title: string;
	url: string;
	image: string;
	image_retina: string;
	meta: Meta3;
	duration: number;
	raw_video_id: number;
	has_embed: boolean;
}

export interface Meta3 {
	service: string;
	duration: string;
}

export interface EditorialInfo {
}

export interface CurrentCoub {
	value: number,
	references: number[]
}
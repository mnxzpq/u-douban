<template>
	<view>
		<view class="container" v-if="moviesList.length!==0">
			<!-- 正在上映的电影-北京 banner -->
			<view class="bannerList">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="1500">
					<swiper-item v-for="(item,index) in moviesList[0].subjects" :key="index">
						<image mode="widthFix" class="slider" :src="item.images.large" @click="toDtails(item.id)" />
					</swiper-item>
				</swiper>
			</view>

			<!-- 推荐 -->
			<view class="list" v-for="(item,index) in moviesList" :key="index">
				<view class="title">{{item.title}}<text @click="toClass(item.title)">></text></view>
				<scroll-view scroll-x="true" style="white-space: nowrap;">
					<view class="slider" v-for="(it,idx) in item.subjects" :key="idx">
						<image mode="aspectFill" :src="it.images.small" @click="toDtails(it.id)" />
						<view class="name">{{it.title}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		inTheaters,
		comingSoon,
		newMovies,
		top250
	} from '@/apis/index.js'

	export default {
		data() {
			return {
				moviesList: []
			}
		},
		onReady() {
			this.pageInit();
		},
		methods: {
			pageInit() {
				uni.showLoading({
					title: '加载中'
				});
				Promise.all([
					this._inTheaters(),
					this._comingSoon(),
					this._newMovies(),
					this._top250()
				]).then((res) => {
					uni.hideLoading();
					let rel = [];
					res.map((item) => {
						rel.push(item.data)
					})
					this.moviesList = rel;
				})
			},
			toDtails(id) {
				uni.navigateTo({
					url: "../details/details?id=" + id
				})
			},
			toClass(title) {
				uni.navigateTo({
					url: "../classification/classification?title=" + title
				})
			},
			_inTheaters() {
				return inTheaters({
					city: this.$store.state.city,
					start: "0",
					count: "10"
				})
			},
			_comingSoon() {
				return comingSoon({
					city: this.$store.state.city,
					start: "0",
					count: "10"
				})
			},
			_newMovies() {
				return newMovies({
					city: this.$store.state.city,
					start: "0",
					count: "10"
				})
			},
			_top250() {
				return top250({
					city: this.$store.state.city,
					start: "0",
					count: "10"
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background: #2C405A;

		.bannerList {
			.swiper {
				height: 400upx;

				.slider {
					width: 100%;
				}
			}
		}

		.list {
			margin-top: 40upx;
			background: #2e4461;
		}

		.title {
			color: #fff;
			margin-left: 10upx;
			padding: 10upx 0;

			text {
				float: right;
				padding: 0 25upx;
			}
		}

		.slider {
			width: 240upx;
			margin-left: 10upx;
			display: inline-block;
			text-overflow: ellipsis;

			image {
				width: 100%;
				height: 320upx;
			}

			.name {
				text-align: center;
				color: #fff;
				overflow: hidden;
			}
		}
	}
</style>

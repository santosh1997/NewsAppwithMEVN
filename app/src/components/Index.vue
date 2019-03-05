<template>
<div>
	<b-table striped hover :items="newsData" :fields="NewsDataFields">
		<template slot="newsurl" slot-scope="data">
			<a v-bind:href="data.item.url">{{ data.item.url }}</a>
		</template>
	</b-table>
	<b-row>
		<b-col><b-form-input v-model="category" type="text" placeholder="Enter the Category" /></b-col>
		<b-col><b-button variant="outline-primary" v-on:click="SearchButtonClicked">Search</b-button></b-col>
		<b-col><b-button variant="outline-primary" v-on:click="ResetButtonClicked">Reset</b-button></b-col>
	</b-row>
</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'index',
	data () {
		return {
			NewsDataFields:[
				'id','name','description',{key:'newsurl', label:'URL'},'category','language','country'
			],
			newsData : {},
			allNewsData : {}
		}
	},
    mounted () {
    	axios.get('http://localhost:3000/api/v1/news')
        .then((response)=>{
        	this.allNewsData=response.data;
        	this.newsData=response.data;
        })
        .catch((error)=>{
          	console.log(error);
        });
    },
    methods:{
    	SearchButtonClicked: function (){
    		this.newsData = this.allNewsData.filter(item => {
         		return item.category == this.category;
      		})
    	},
    	ResetButtonClicked: function (){
    		this.newsData=this.allNewsData;
    	}
    }
}
</script>
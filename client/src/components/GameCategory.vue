<template>
  <div class="alphabet">
    <div
      class="category"
      style="width: 250px;"
    >
			<h2>Category Name</h2>
      <img
        src="https://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png"
        alt=""
				style="width: 200px"
      />
    </div>
  </div>
</template>

<script>
export default {
	name: "GameCategory",
	data () {
		return {
			category: [
				{
					name: 'Makanan',
					image_url: 'https://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png'
				},
				{
					name: 'Nama Negara',
					image_url: 'https://3.bp.blogspot.com/-RIE9ZquPRvw/XNFdjInApQI/AAAAAAAACbQ/PDUfb-fLqVI9P3dSlNLjJrqq5jhDMsU5ACLcBGAs/s1600/negara.jpg'
				}
			]
		}
	}, methods: {
		setCategory() {
			
		}
	}
};
</script>

<style>
</style>
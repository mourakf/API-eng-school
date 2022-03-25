module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('classes', [{
				start_date: "2020-02-01",
				teacher_id: 6,
				level_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				start_date: "2020-02-01",
				teacher_id: 5,
				level_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				start_date: "2020-02-01",
				teacher_id: 6,
				level_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Turmas', null, {})
	}
}
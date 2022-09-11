import OfficerRepository from '../Repositories/Officer.Repository.js'

class OfficerService {
  constructor() {
    this.repository = new OfficerRepository()
  }
  async getAll() {
    try {
      const officers = await this.repository.getAll();
      if (!officers || officers?.length === 0) throw new Error({msg: 'Error'});
      return officers;
    } catch(err) {
      throw new Error(err)
    }
  }
  async getById(id) {
    try {
      const officer = await this.repository.getById(id);
      return officer;
    } catch(error) {
      throw new Error(error)
    }
  }
  async create(officer) {
    try {
      const newOfficer = await this.repository.create(officer);
      return newOfficer;
    } catch(err) {
      throw new Error(err)
    }
  }
  async update(id, data) {
    try {
      const newOfficer =  await this.repository.update(id, data);
      return newOfficer;
    } catch(err) {
      throw new Error(err)
    }
  }
  async deleteById(id) {
    try {
      const result = await this.repository.deleteById(id);
      return result;
    } catch(err) {
      throw new Error(err)
    }
  }
}

export default OfficerService
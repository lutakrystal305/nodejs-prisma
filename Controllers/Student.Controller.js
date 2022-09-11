import StudentService from '../Services/Student.Service.js'

  const service = new StudentService();
  
  const getAll = async (req, res) => {
    try {
      const result = await service.getAll();
      res.status(200).send(result);
    } catch(err) {
      res.status(404);
    }
  }

  const getById = async (req, res) => {
    try {
      const result = await service.getById(req.params.id)
      res.status(200).send(result)
    } catch(err) {
      res.status(404)
    }
  }

  const create = async (req, res) => {
    try {
      const result = await service.create(req.body)
      res.status(200).send(result)
    } catch(err) {
      res.status(404)
    }
  }

  const update = async (req, res) => {
    try {
      const result = await service.update(req.params.id, req.body)
      res.status(200).send(result)
    } catch(err) {
      res.status(404)
    }
  }

  const deleteById = async (req, res) => {
    const result = await this.service.deleteById(req.params.id)
    res.status(200).send(result)
  }

export default { getAll, getById, create, update, deleteById }
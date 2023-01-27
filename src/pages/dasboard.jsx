import { useState, useEffect } from 'react'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineUser, AiOutlineBook, AiOutlineAppstoreAdd, AiOutlineClose } from 'react-icons/ai'
import { Loading, Button, Tooltip, Container, Modal, Input, Text, Spacer } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
import { paginationOpciones } from 'funciones/dataTable'
import Datatable, { createTheme } from 'react-data-table-component'
import { Slide, toast, ToastContainer, Zoom } from 'react-toastify'
import {Caveat} from '@next/font/google'

const caveat = Caveat({subsets:"latin", weight:"600"})
const dasboard = () => {
  //!get
  const baseUrl = "https://backend-c4-g3-a4bx.vercel.app/api/books/"
  const get = async () => {
    try {
      const response = await axios.get(baseUrl)
      const datos = await response.data
      setdata(datos)
      setLoader(false)
    } catch (error) {
      console.log(error)
    }
  }
  //!post
  const post = async (data) => {
    try {
      await axios.post(baseUrl, data)
      setdata([...date, data])
      reset()
      closeModal()
      toast.info("creado correctamente", {
        position: 'bottom-right',
        pauseOnHover: false,
        hideProgressBar: false,
        transition: Slide
      })
    } catch (error) {
      console.log(error)
    }
  }

  //!put
  const [idParam, setidParam] = useState(null)
  const put = async (id) => {
    date.find(dat => {
      if (dat._id === id) {
        const { autor, libro, categoria } = dat
        setValue("autor", autor);
        setValue("libro", libro);
        setValue("categoria", categoria);
        setidParam(id)
        closeModal()
      } return
    })
  }
  //!actualizar datos
  const actualizar = async (data) => {
    await axios.put(baseUrl + idParam, data)
    closeModal()
    const newdate = date.map(dat => {
      if (dat._id === idParam) {
        return { ...date, autor: data.autor, libro: data.libro, categoria: data.categoria }
      }
      return dat
    })
    setdata(newdate)
    reset()
    setidParam(null)
    toast.info("informacion actualizada correctamente", {
      pauseOnHover: false,
      hideProgressBar: false,
      transition: Slide
    })
  }



  //!delate
  const delate = async (row) => {
    const id = row._id
    Swal.fire({
      title: '<b>Estas seguro?</b>',
      html: `de eliminar el libro <b>"${row.libro}"</b>`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'cancelar',
      confirmButtonColor: '#0072F5',
      cancelButtonColor: '#F31240',
      confirmButtonText: 'si,estoy seguro!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(baseUrl + id)
        } catch (error) {
          console.log(error)
        }
        setdata(date.filter(dato => dato._id !== id))
        toast.success("eliminado correctamente")
      }
    })
  }
  //useEffect
  useEffect(() => {
    get()
  }, [])
  //usestates
  const [date, setdata] = useState([]) //
  const [loader, setLoader] = useState(true)
  const [activate, setActivate] = useState(false)
  const closeModal = () => { setActivate(!activate) }
  //!configuracion de useform
  const { register, handleSubmit, reset, setValue, formState: { isValid, } } = useForm();

  //!-----------lo que ocurre cuando le envia el formulario--------

  const customSubmit = async (data,) => {
    if (idParam === null) {
      post(data)
    } else {
      actualizar(data)
    }
    
  }
  //configuracion de la tabla

  createTheme("custom", { divider: { default: "transparent" } });

  //!columnas de la tabla
  const columns = [
    { name: "autor", selector: (row) => row.autor, sortable: true, grow: "2" },
    { name: "libro", selector: (row) => row.libro, sortable: true, grow: "3" },
    { name: "categoria", selector: (row) => row.categoria, sortable: true, },
    //!botones de actualizar y de eliminar
    {
      name: "acciones",
      selector: (row) => (
        <div className="flex items-center gap-3 text-center">
          <Tooltip content={"editar"} color={"primary"} placement={'left'}>
            <Button auto onPress={() => { put(row._id) }} light color={'primary'} icon={<AiOutlineEdit className="h-5 w-5 rou" />} />
          </Tooltip>
          <Tooltip content={"eliminar"} color={"error"} placement={'right'}>
            <Button auto onPress={() => delate(row)} light color={'error'} icon={<AiOutlineDelete className="h-5 w-5" />} />
          </Tooltip>
        </div>
      ),
    },
  ];

  ///------------------------///-------------------//-----------------
  return (
    <Container>
      {/* boton de abrir modal */}
      <Button onPress={closeModal} auto shadow color={'gradient'} className="my-4">crear libro</Button>
      {/* texto de total de libro */}
      <Text b css={{ textGradient: "$blue600, $purple600", }} className='justify-end flex text-xl lg:text-3xl mr-10 gap-2'>Total de libros <span className='font-bold px-1'>{date.length}</span></Text>
      {/* modal */}
      <Modal open={activate} preventClose aria-labelledby="modal-title" className='relative'>
        {/* formulario */}
        <form onSubmit={handleSubmit(customSubmit)}>
          <Modal.Header>
            {/* boton de cerrar modal */}
            <AiOutlineClose className='absolute top-3 right-3 text-red-500 text-2xl cursor-pointer hover:-translate-y-[0.5px] duration-200' onClick={() => { closeModal(), reset() }} />
            {/* text de crear libro */}
            <Text b h2 css={{ textGradient: "45deg, $blue600 -20%, $purple600 90%", padding: "$1" }} className={`${caveat.className}`}>
              {(idParam === null) ? "crear libro" : "editar libro"}
            </Text>
          </Modal.Header>
          <Modal.Body className='relative'>
            <Spacer y={0.5} />
            {/* input de autor */}
            <Input type="text" label='autor' bordered rounded contentLeft={<AiOutlineUser className='text-blue-500' />} color='primary' {...register("autor", { required: true })} />
            <Spacer y={0.5} />
            {/* input de libro */}
            <Input type="text" label='libro' bordered rounded contentLeft={<AiOutlineBook className='text-blue-500' />} color='primary' {...register("libro", { required: true, })} />
            <Spacer y={0.5} />
            {/* input de categoria */}
            <Input type="text" label='categoria' bordered rounded contentLeft={<AiOutlineAppstoreAdd className='text-blue-500' />} color='primary' {...register("categoria", { required: true, })} />
            <Spacer y={0.5} />
          </Modal.Body>
          <Modal.Footer className='h-20'>
            <Button auto bordered color={'primary'} type="submit" disabled={(isValid === false)} ghost>{(idParam === null) ? "crear" : "actualizar"}</Button>

          </Modal.Footer>
        </form>
      </Modal>
      {/* loader */}
      {loader ? (<Loading size='xl' type='default' className='inset-y-36 inset-x-1/2' />) :
        <Container>
          {/* tabla */}
          <Datatable
            className='scrollbar-thumb-rounded-md scrollbar-track-rounded-md px-2   scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-300'
            data={date}
            columns={columns}
            fixedHeader
            responsive
            fixedHeaderScrollHeight="400px"
            //striped
            highlightOnHover
            pagination
            theme={"custom"}
            paginationComponentOptions={paginationOpciones}
          />
        </Container>
      }
      {/* notificaciones de eliminacion y de creacion */}
      <ToastContainer autoClose={1000} hideProgressBar={false} closeButton={false} transition={Zoom} />
    </Container>
  )
}

export default dasboard
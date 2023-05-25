export default function Api(req: any, res: any) {
    res.status(200).json({ name: 'John Doe' })
}
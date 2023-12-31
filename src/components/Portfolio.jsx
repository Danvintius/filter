class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          filters: filters,
          selected: filters[0],
          projects: projects
        }
      }
      handlerToggle = (filter) => {
       let projs = (filter === filters[0]) ? projects : projects.filter(item => item.category === filter)
        this.setState({
          selected: filter,
          projects: projs
        })
      }  
      render() {
        return(
          <div>
            <Toolbar
              filters={this.state.filters}
              selected={this.state.selected}
              onSelectFilter={(selected) => this.handlerToggle(selected)} />
            <ProjectList projects={this.state.projects} />
          </div>
        )
      }
}
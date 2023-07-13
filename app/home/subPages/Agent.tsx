import { useState } from "react"
import AgentDialog from "./AgentDialog"
import { AgentType } from "./types"
import { cn } from "@/lib/utils"

const Agent = () => {
  const [agents, setAgents] = useState<AgentType[]>([])

  const onAddAgent = async (agent: AgentType) => {
    if (agent.id) {
      setAgents(agents.map((a) => (a.id === agent.id ? agent : a)))
    } else {
      const id = Math.random().toString(36).substring(2, 9)
      setAgents([...agents, { ...agent, id }])
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="action-ares w-full flex items-center justify-end p-4 mb-4">
        <AgentDialog onFinish={onAddAgent} />
      </div>
      <div className="agent-list w-full h-full flex flex-col">
        {agents.map((agent) => {
          return (
            <div
              key={agent.id}
              className="agent-item w-full h-20 p-10 flex items-center border mb-2 rounded-md transition-all hover:shadow-indigo-500/40 hover:-translate-y-1 "
            >
              <div className="w-1/2 text-bold text-slate-900">{agent.name}</div>
              <div
                className={cn(
                  "w-1/3 font-semibold",
                  agent.status === "inactive"
                    ? "text-red-500"
                    : "text-green-500"
                )}
              >
                {agent.status}
              </div>
              <AgentDialog agent={agent} onFinish={onAddAgent} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Agent

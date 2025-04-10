import * as assert from "assert"
import * as vscode from "vscode"

suite("Roo Code Extension", () => {
	test("Commands should be registered", async () => {
		const expectedCommands = [
			"wk-code.plusButtonClicked",
			"wk-code.mcpButtonClicked",
			"wk-code.historyButtonClicked",
			"wk-code.popoutButtonClicked",
			"wk-code.settingsButtonClicked",
			"wk-code.openInNewTab",
			"wk-code.explainCode",
			"wk-code.fixCode",
			"wk-code.improveCode",
		]

		const commands = await vscode.commands.getCommands(true)

		for (const cmd of expectedCommands) {
			assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`)
		}
	})
})
